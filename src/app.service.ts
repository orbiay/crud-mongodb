import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model, UpdateWriteOpResult } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}
  
  async create(user: User): Promise<User > {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }
  async update(id: string, updatedData: Partial<User>): Promise<string | User> {
    try{
      const olduser = await this.userModel.findById(id);
      if (!olduser)
        return "There is no user with this id";
    
      await this.userModel.updateOne({ _id: id }, { $set: updatedData });
    
      var user:User = await this.userModel.findById(id);
      return user;
    }
    catch{
      return "Error";
    }
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }
  async delete(id:string) :Promise<String> {
    const isdelte = await this.userModel.deleteOne({_id:id});
    if (isdelte.deletedCount > 0)
      return "User Deleted Seccussfuly";
    return "There is no user whith this _id";
  }
}
