/* eslint-disable prettier/prettier */
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

/* eslint-disable prettier/prettier */
export const devConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345678',
  database: 'postgres',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
