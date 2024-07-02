import mongoose from "mongoose";
async function connectoDB(){
    try {
        await mongoose.connect('mongodb+srv://zeenathkousar:7396915215@zeenathcluster.lnsbekd.mongodb.net/mongodb-a24');
        console.log('DB is Connected Successfully');
    } catch (error) {
        console.error(error);
    }
}
connectoDB();

export default connectoDB;