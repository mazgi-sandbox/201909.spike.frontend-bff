import ObjectStorage from 'lib/resource/object-storage/virtual'

export class GoogleCloudStorageInformation extends ObjectStorage {
  public tags: Array<string>
  constructor(
    public id: string,
    public storageClass: string,
    public location: string,
    public labels: Array<string>
  ) {
    super(id, location)
  }
}
