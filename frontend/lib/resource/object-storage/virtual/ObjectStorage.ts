import IObjectStorage from './IObjectStorage'

export default class ObjectStorage implements IObjectStorage {
  constructor(
    public id: string,
    public location: string,
    public tags: Array<string> = []
  ) {}
}
