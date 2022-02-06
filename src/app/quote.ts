export class Goal {
  showDescription: boolean;
  constructor(public id: number,public Author: string,public Quote: string, public Upvote: number ,public Downvote: number,public lastPosted: Date){
    this.showDescription=false;
  }
}