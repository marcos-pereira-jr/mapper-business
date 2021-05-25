import { IsInt, Min } from 'class-validator';

export class PostDTO {
    @IsInt()
    @Min(0)
    userId: number;
    date: Date;
    description: string;
}