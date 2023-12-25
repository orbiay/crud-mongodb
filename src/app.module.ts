import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';

// mongodb://root:example@localhost:27017
@Module({
  imports: [MongooseModule.forRoot('mongodb://pass:pass@localhost:27017',{dbName: 'mydb'}),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
