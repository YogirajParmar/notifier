import  {Sequelize} from 'sequelize';
import path from 'path';

export class DB {
    constructor(config: any) {
        this.sequelize = new Sequelize(config);
        
        this.init();
    }
    private static instance: DB;

  static init(config: any) {
    if (!DB.instance) {
      DB.instance = new DB(config);
    }
  };

  private sequelize: Sequelize;
  static getInstance() {
    if (!DB.instance) {
      throw new Error('Database not initialized. Call init() first.');
    }
    return DB.instance;
  }

  public static getSequelize() {
    return this.getInstance().sequelize;
  }

  init() {
    this.sequelize.authenticate()
      .then(() => {
        console.info("DB Connection has been established successfully.");
      })
      .catch((error: any) => {
        console.error(`Unable to connect to the database: ${error}`);
      });
  }
}
