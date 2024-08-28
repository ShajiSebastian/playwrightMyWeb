import { FullConfig } from '@playwright/test';
import dotenv from "dotenv"

// The below script uses to retrieve the environment variable depends on environment

async function globalSetup(config: FullConfig) {
    if (process.env.test_env) {
        dotenv.config({
            path: `.env.${process.env.test_env}`,
            override: true
        })
    }

};

export default globalSetup;