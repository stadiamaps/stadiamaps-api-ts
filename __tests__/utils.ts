import * as dotenv from "dotenv";

dotenv.config()
export const shouldRunIntegrationTests = process.env.RUN_INTEGRATION_TESTS === 'true';
export const apiKey = process.env.API_KEY;