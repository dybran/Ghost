import {Controller, Get, Query} from '@nestjs/common';
import {WebFingerService} from '../../../core/activitypub/webfinger.service';

@Controller('.well-known/webfinger')
export class WebFingerController {
    constructor(
        private readonly service: WebFingerService
    ) {}

    @Get('')
    async getResource(@Query('resource') resource: unknown) {
        if (typeof resource !== 'string') {
            throw new Error('Bad Request');
        }
        return await this.service.getResource(resource);
    }
}
