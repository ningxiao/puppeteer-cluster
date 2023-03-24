
import * as puppeteer from 'puppeteer';

import { ResourceData } from './abstract/Concurrency';
import SingleBrowser from './abstract/SingleBrowser';

export default class Page extends SingleBrowser {

    protected async createResources(): Promise<ResourceData> {
        return {
            page: await (this.browser as puppeteer.Browser).newPage(),
        };
    }

    protected async freeResources(resources: ResourceData): Promise<void> {
        await resources.page.close();
    }

}
