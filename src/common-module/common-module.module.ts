import { Module, Global } from '@nestjs/common';
import { v4 as Id } from 'uuid';

const UID = {
  provide: 'UUID',
  useValue: Id,
}
@Global()
@Module({
  providers: [UID],
  exports: [UID],
})
export class CommonModuleModule {}
