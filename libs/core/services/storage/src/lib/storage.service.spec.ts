import { StorageService } from './storage.service';

describe('StorageService', () => {
  let localStorageKey: string;
  let service: StorageService;
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  };

  beforeEach(() => {
    service = new StorageService();

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
    localStorageKey = 'someKey';
    jest.clearAllMocks();
  });

  describe('getItem', () => {
    it('should call localStorage getItem', () => {
      service.getItem(localStorageKey);

      expect(localStorage.getItem).toHaveBeenCalledWith(localStorageKey);
    });
  });

  describe('setItem', () => {
    it('should call localStorage setItem with stringified object', () => {
      const localStorageValue = { user: 'Ivan' };
      const expectedValue = JSON.stringify(localStorageValue);

      service.setItem(localStorageValue, localStorageKey);

      expect(localStorage.setItem).toHaveBeenCalledWith(
        localStorageKey,
        expectedValue
      );
    });
  });

  describe('removeItem', () => {
    it('should call localStorage removeItem', () => {
      service.removeItem(localStorageKey);

      expect(localStorage.removeItem).toHaveBeenCalledWith(localStorageKey);
    });
  });
});
