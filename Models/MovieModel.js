import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    image: {type: String, required: false},
    year: {type: Number, required: true},
    genre: {type: [String], required: true},
    rating: {type: Number, required: true}
});

const MovieModel = mongoose.model("movie",movieSchema);
export default MovieModel;