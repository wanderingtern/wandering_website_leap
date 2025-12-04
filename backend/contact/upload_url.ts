import { api } from "encore.dev/api";
import { contactPhotos } from "./storage";

export interface GetUploadUrlRequest {
  filename: string;
}

export interface GetUploadUrlResponse {
  uploadUrl: string;
  objectName: string;
}

export const getUploadUrl = api<GetUploadUrlRequest, GetUploadUrlResponse>(
  { expose: true, method: "POST", path: "/contact/upload-url" },
  async (params) => {
    const timestamp = Date.now();
    const objectName = `${timestamp}-${params.filename}`;
    
    const { url } = await contactPhotos.signedUploadUrl(objectName, {
      ttl: 300,
    });

    return {
      uploadUrl: url,
      objectName,
    };
  }
);
