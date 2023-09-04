import { Storage_Local } from './Storage'
import { AppDataSource } from '../../data-source'

export const userRepository = AppDataSource.getRepository(Storage_Local);
