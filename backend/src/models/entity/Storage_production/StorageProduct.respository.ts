import { Storage_Production } from './StorageProduc'
import { AppDataSource } from '../../data-source'

export const StorageProductRepository = AppDataSource.getRepository(Storage_Production)