
import * as puppeteer from 'puppeteer';

import { ResourceData } from './abstract/Concurrency';
import SingleBrowser from './abstract/SingleBrowser';

export default class Context extends SingleBrowser {

    protected async createResources(): Promise<ResourceData> {
        const context = await (this.browser as puppeteer.Browser)
            .createIncognitoBrowserContext();
        const page = await context.newPage();
        return {
            context,
            page,
        };
    }

    protected async freeResources(resources: ResourceData): Promise<void> {
        await resources.context.close();
    }

}
