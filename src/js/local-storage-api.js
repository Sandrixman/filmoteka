
export default class LocalStorageAPIService {

  constructor() {
    this.storageKey = '';
  }

  saveToLibrary(data) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  loadFromLibrary() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];;
    } catch (error) {
      console.log('Error: ', error.message);
      return [];
    }
  }

  get key() {
    return this.storageKey;
  }

  set key(newStorageKey) {
    this.storageKey = newStorageKey;
  }
}
