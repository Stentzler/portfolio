import { z } from "zod";

export const localeSchema = z.enum(["en", "pt-BR"]);
export const projectCategorySchema = z.enum([
  "backend",
  "cloud",
  "devops",
  "platform",
  "full-stack",
  "lab",
]);
export const projectStatusSchema = z.enum([
  "completed",
  "in-progress",
  "maintained",
  "archived",
  "case-study",
  "lab",
]);

const localizedTextSchema = z.object({
  en: z.string().trim().min(1),
  "pt-BR": z.string().trim().min(1),
});

const externalLinkSchema = z.object({
  label: localizedTextSchema,
  url: z.object({
    en: z.string().url(),
    "pt-BR": z.string().url(),
  }),
});

export const profileSchema = z.object({
  name: z.string().trim().min(1),
  role: localizedTextSchema,
  subRole: localizedTextSchema,
  hero: localizedTextSchema,
  availability: localizedTextSchema,
  capabilities: z.array(localizedTextSchema).min(1),
  bio: z.array(localizedTextSchema).min(1),
  timeline: z.array(z.object({
    period: localizedTextSchema,
    title: localizedTextSchema,
    description: localizedTextSchema,
  })).min(1),
  contactLinks: z.array(externalLinkSchema).min(1),
});

const projectSectionSchema = z.object({
  heading: localizedTextSchema,
  paragraphs: z.array(localizedTextSchema).min(1),
  items: z.array(localizedTextSchema).optional(),
});

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  publicationState: z.enum(["draft", "published", "private"]),
  featured: z.boolean(),
  displayOrder: z.number().int().nonnegative(),
  category: projectCategorySchema,
  status: projectStatusSchema,
  year: z.number().int().min(2000).max(2100),
  technologies: z.array(z.string().trim().min(1)).min(1),
  repositoryUrl: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  coverImage: z
    .object({
      src: z.string().startsWith("/images/"),
      alt: localizedTextSchema,
      width: z.number().int().positive(),
      height: z.number().int().positive(),
    })
    .optional(),
  content: z.object({
    title: localizedTextSchema,
    summary: localizedTextSchema,
    sections: z.array(projectSectionSchema).default([]),
  }),
}).superRefine((project, context) => {
  if (project.featured && !project.coverImage) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Featured projects require a cover image.",
      path: ["coverImage"],
    });
  }
});

export const uiSchema = z.object({
  en: z.object({
    metadata: z.object({ title: z.string().min(1), description: z.string().min(1) }),
    navigation: z.object({
      home: z.string().min(1), bio: z.string().min(1), projects: z.string().min(1),
      contact: z.string().min(1), language: z.string().min(1),
    }),
    content: z.object({ preparing: z.string().min(1), projectsEmpty: z.string().min(1), notFound: z.string().min(1), skipToContent: z.string().min(1) }),
    sections: z.object({ capabilities: z.string().min(1), bio: z.string().min(1), timeline: z.string().min(1), contact: z.string().min(1) }),
    footer: z.object({ copyright: z.string().min(1) }),
  }),
  "pt-BR": z.object({
    metadata: z.object({ title: z.string().min(1), description: z.string().min(1) }),
    navigation: z.object({
      home: z.string().min(1), bio: z.string().min(1), projects: z.string().min(1),
      contact: z.string().min(1), language: z.string().min(1),
    }),
    content: z.object({ preparing: z.string().min(1), projectsEmpty: z.string().min(1), notFound: z.string().min(1), skipToContent: z.string().min(1) }),
    sections: z.object({ capabilities: z.string().min(1), bio: z.string().min(1), timeline: z.string().min(1), contact: z.string().min(1) }),
    footer: z.object({ copyright: z.string().min(1) }),
  }),
});

export type Project = z.infer<typeof projectSchema>;
export type UiContent = z.infer<typeof uiSchema>;
export type Profile = z.infer<typeof profileSchema>;
