import { PartialType } from '@nestjs/mapped-types';
import { CreateMiembroDto } from './create-miembro.dto';

export class UpdateMiembroDto extends PartialType(CreateMiembroDto) {}
