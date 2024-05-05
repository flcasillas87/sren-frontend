export class NavigationModel {
  constructor(
    public id: string,
    public url: string,
    public label: string,
    public name: string,
    public href: string,
    public icon: string,
    public iconComponent: any,
    public title: boolean,
    public variant: string,
    public divider: boolean
  ) {}
}
