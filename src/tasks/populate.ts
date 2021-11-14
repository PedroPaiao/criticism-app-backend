import Movie from "../models/Movie";

import { moviesActionJson } from '../libs/populate/movies_action'

export interface movieProps {
  id: number
  title: string
  description: string
  imageLink: string
  category?: string
  trailler_link: string
  director: string
  year: number
  slugSearch?: string
}

async function Populate() {
  console.log("Populing action movies \n")
  moviesActionJson.movies.forEach((movie: any) => {
    let { name, description, category, image_link, trailler_link, director,  year } = movie;
    Movie.create({ name, description, category, image_link, trailler_link, director,  year })
  });
}

Populate()