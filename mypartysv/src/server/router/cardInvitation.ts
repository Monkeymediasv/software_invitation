import { createProtectedRouter } from "./context";
import { Invitation, Prisma } from "@prisma/client";


import { z } from "zod";


export const admissionFormRouter = createProtectedRouter()
.mutation("createApplication", {
    input: FormSchema,
    async resolve({ ctx, input }) {
      const cloudinaryUrl = await uploadImage(input.photoUrl);

      const application: Prisma.ApplicationCreateInput = {