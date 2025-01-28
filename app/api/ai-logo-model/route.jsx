import { AILogoPropmt } from "@/configs/AiModel";
import { db } from "@/configs/FirebaseConfig";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt, email, title, desc } = await req.json();
  try {
    //Generate AI Text Prompt for Logo
    const AiPromptResult = await AILogoPropmt.sendMessage(prompt);
    console.log(JSON.parse(AiPromptResult.response.text()).prompt);
    const AIPrompt = JSON.parse(AiPromptResult.response.text()).prompt;

    //Generate Logo From AI Modal
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA",
      AIPrompt,
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      }
    );
    //Convert to BASE 64 Image
    const buffer = Buffer.from(response.data, "binary");
    const base64Image = buffer.toString("base64");

    const base64ImageWithMine = `data:image/png;base64,${base64Image}`;
    console.log(base64ImageWithMine);

    //save to Firebase Database
    try {
      await setDoc(doc(db, "users", email, "logos", Date.now().toString()), {
        image: base64ImageWithMine,
        title: title,
        desc: desc,
      });
    } catch (e) {}

    return NextResponse.json({ image: base64ImageWithMine });

    //AI logo Image Modal
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
