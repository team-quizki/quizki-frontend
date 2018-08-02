import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  pageTitle:string;

  getPageTitle() {
    /* Remove the following line after the resolution. Notice you should see
     * Route(url:'', path:'') on the console. That's because my-nav
     * activated the service. Each page component has a data element
     *  data:{pageTitle, "thePageTitle"}.
     */

    console.log(this._activatedRoute.toString());

    /* the following statment is correct once we have data to display.
     * Currently, the pageTitle is '' which displays as such. I think we need to
     * use lifecycle hooks and resolve. The big question is to determine where
     * to place the lifecyle hook and resolve, and which lifecyle hook to use.
     * Note that the ngOnInit occurs before the activatedRoute has a url assigned.
     * likely we need to use ngOnChange, or at least that's my current thought.
     * Perhaps each new page component needs to call getPageTitle() so the focus
     * is on that particular page. Or perhaps associate with the button click.
     * I understand mulpile actions on buttons are possible, but
     * the practice is considered obstructive programming.
     */

    //this.pageTitle = this._activedRoute.snapshot.data['pageTitle'];
    this.pageTitle = "myTempPageTitle";

    return this.pageTitle;
  };

}
