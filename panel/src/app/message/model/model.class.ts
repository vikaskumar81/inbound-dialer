export interface Message
{
    id:number,
    filename: string,
    file: string
}
export class MessageForm {
    constructor(
        public id?: number,
        public filename?: string,
        public file?: string
    ) {}
  }
  