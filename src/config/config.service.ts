import * as dotenv from 'dotenv';

export class ConfigService {
    private readonly envConfig: Record<string, string>;
    constructor() {
        const result = dotenv.config();

        if (result.error) {
            this.envConfig = process.env;
        } else {
            this.envConfig = result.parsed;
        }
    }

    public get(key: string): string {
        return this.envConfig[key];
    }

    public async getPortConfig() {
        return this.get('PORT');
    }

    public async getMongoConfig() {
        console.log('mongodb://' + this.get('MONGO_USER') + ':' + this.get('MONGO_PASSWORD') + '@' + this.get('MONGO_HOST') + '/' + this.get('MONGO_DATABASE'));
        
        return {
            //uri: 'mongodb://' + this.get('MONGO_USER') + ':' + this.get('MONGO_PASSWORD') + '@' + this.get('MONGO_HOST') + '/' + this.get('MONGO_DATABASE'),
            uri: 'mongodb://admin:1234@localhost:27017/?authMechanism=DEFAULT&authSource=guffa',

            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
    }
}
