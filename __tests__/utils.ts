import * as dotenv from "dotenv";
import * as _ from "lodash";
import { diff } from "jest-diff";

dotenv.config();
export const shouldRunIntegrationTests =
  process.env.RUN_INTEGRATION_TESTS === "true";
export const apiKey = process.env.API_KEY;

// Helper function to convert snake_case keys to camelCase
function toCamelCase(inObj: any): any {
  const o = _.cloneDeep(inObj);
  if (_.isPlainObject(o)) {
    const n: any = {};
    Object.keys(o).forEach((k) => {
      n[_.camelCase(k)] = toCamelCase(o[k]);
    });
    return n;
  } else if (_.isArray(o)) {
    return o.map((i) => {
      return toCamelCase(i);
    });
  }
  return o;
}

// Helper function to recursively check approximate object equivalence, ignoring missing keys
// in `other`.
function isApproximatelyEquivalent(received: any, other: any): boolean {
  // Check if both inputs are arrays
  if (_.isArray(received) && _.isArray(other)) {
    // If array lengths are different, they are not equivalent
    if (received.length !== other.length) {
      return false;
    }
    // Iterate over each element
    for (let i = 0; i < received.length; i++) {
      // Check equivalence for each corresponding element
      if (!isApproximatelyEquivalent(received[i], other[i])) {
        return false;
      }
    }
    return true;
  }
  // Check if both inputs are plain objects
  else if (_.isPlainObject(received) && _.isPlainObject(other)) {
    const keysReceived = Object.keys(received);
    // Check equality for each key-value pair in the received object (extra keys may be added in the other,
    // and we still treat them as equivalent)
    for (let key of keysReceived) {
      const valReceived = received[key];
      const valOther = other[key];
      if (
        (_.isUndefined(valReceived) && !_.has(other, key)) ||
        (_.isUndefined(valOther) && !_.has(received, key))
      ) {
        continue;
      }
      if (!isApproximatelyEquivalent(valReceived, valOther)) {
        return false;
      }
    }
    // If all checked key-value pairs are equal, then objects are equivalent
    return true;
  }
  // If inputs are neither plain objects nor arrays, check equality
  else {
    return _.isEqual(received, other);
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /// Checks that two objects are approximately equal. In particular:
      ///
      /// 1. If a key is omitted from one object and explicitly undefined in the other, they are equivalent
      /// 2. The other object may contain additional keys, and the objects will be considered equivalent
      toBeApproximatelyEquivalent(a: any): R;
    }
  }
}

expect.extend({
  toBeApproximatelyEquivalent(received, other) {
    // Convert received and other objects to camelCase
    const camelCaseReceived = toCamelCase(received);
    const camelCaseOther = toCamelCase(other);

    const pass = isApproximatelyEquivalent(camelCaseReceived, camelCaseOther);

    const message = pass
      ? () =>
          this.utils.matcherHint(
            "toBeApproximatelyEquivalent",
            undefined,
            undefined,
            {
              isNot: this.isNot,
            },
          ) +
          "\n\n" +
          `Expected: ${this.utils.printExpected(camelCaseOther)}\n` +
          `Received: ${this.utils.printReceived(camelCaseReceived)}`
      : () => {
          const diffString = diff(camelCaseOther, camelCaseReceived, {
            expand: this.expand,
          });
          return (
            this.utils.matcherHint(
              "toBeApproximatelyEquivalent",
              undefined,
              undefined,
              {
                isNot: this.isNot,
              },
            ) +
            "\n\n" +
            (diffString && diffString.includes("- Expect")
              ? `Difference:\n\n${diffString}`
              : `Expected: ${this.utils.printExpected(camelCaseOther)}\n` +
                `Received: ${this.utils.printReceived(camelCaseReceived)}`)
          );
        };

    return { actual: received, message, pass };
  },
});
