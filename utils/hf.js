import dotenv from "dotenv"
dotenv.config()
import { HfInference } from "@huggingface/inference"
const HF_TOKEN = process.env.HF_TOKEN
export const inference = new HfInference(HF_TOKEN)
