import { Invitation } from "@prisma/client";
import { z } from "zod";
import { createAdminProtectedRouter } from "./context";

export const adminRouter = createAdminProtectedRouter()
  .query("getAllApplications", {
    resolve({ ctx }) {
      return ctx.prisma.invitation.findMany({
        select: {
          id: true,
          email: true,
          typeEvent: true,
          category: true,
        },
      });
    },
  });
 

