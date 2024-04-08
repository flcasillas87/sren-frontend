import { INavData } from '../interfaces/navigation.interface';

export class NavigationModel implements INavData {
  constructor(
    public id: string,
    public name: string,
    public url: string,
  ) {}
}
