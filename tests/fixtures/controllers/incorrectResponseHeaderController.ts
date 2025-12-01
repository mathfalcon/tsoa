import { Controller, Get, Response, Route } from '@mathfalcon/tsoa-runtime';

@Route('IncorrectResponseHeader')
@Response<null, any>(200)
export class IncorrectResponseHeaderController extends Controller {
  @Get()
  public async handler(): Promise<void> {
    return;
  }
}
