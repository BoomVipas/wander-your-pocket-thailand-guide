import { z } from "zod";
import type { Place } from "@/lib/db";

export const placeFormSchema = z.object({
  googlePlaceId: z.string().max(255).optional().or(z.literal("")),
  slug: z.string().max(255).optional().or(z.literal("")),
  name: z.string().max(255).optional().or(z.literal("")),
  isActive: z.boolean().optional().default(true),
  isFeatured: z.boolean().optional().default(false),
  categoryKey: z.string().max(255).optional().or(z.literal("")),
  superCategory: z.string().max(255).optional().or(z.literal("")),
  theme: z.string().max(255).optional().or(z.literal("")),
  tagline: z.string().max(255).optional().or(z.literal("")),
  shortDescription: z.string().optional().or(z.literal("")),
  longDescription: z.string().optional().or(z.literal("")),
  address: z.string().optional().or(z.literal("")),
  latitude: z.coerce.number().finite().optional(),
  longitude: z.coerce.number().finite().optional(),
  photoReference: z.string().optional().or(z.literal("")),
  photoAttribution: z.string().optional().or(z.literal("")),
  bookingUrl: z.string().url().optional().or(z.literal("")),
  ttsAudioPath: z.string().optional().or(z.literal("")),
  sortOrder: z.coerce.number().int().optional(),
});

export type PlaceFormValues = z.infer<typeof placeFormSchema>;

export const defaultPlaceValues: PlaceFormValues = {
  googlePlaceId: "",
  slug: "",
  name: "",
  isActive: true,
  isFeatured: false,
  categoryKey: "",
  superCategory: "",
  theme: "",
  tagline: "",
  shortDescription: "",
  longDescription: "",
  address: "",
  latitude: undefined,
  longitude: undefined,
  photoReference: "",
  photoAttribution: "",
  bookingUrl: "",
  ttsAudioPath: "",
  sortOrder: undefined,
};

export function placeToFormValues(place: Place): PlaceFormValues {
  return {
    googlePlaceId: place.googlePlaceId ?? "",
    slug: place.slug ?? "",
    name: place.name ?? "",
    isActive: place.isActive ?? true,
    isFeatured: place.isFeatured ?? false,
    categoryKey: place.categoryKey ?? "",
    superCategory: place.superCategory ?? "",
    theme: place.theme ?? "",
    tagline: place.tagline ?? "",
    shortDescription: place.shortDescription ?? "",
    longDescription: place.longDescription ?? "",
    address: place.address ?? "",
    latitude: place.latitude ?? undefined,
    longitude: place.longitude ?? undefined,
    photoReference: place.photoReference ?? "",
    photoAttribution: place.photoAttribution ?? "",
    bookingUrl: place.bookingUrl ?? "",
    ttsAudioPath: place.ttsAudioPath ?? "",
    sortOrder: place.sortOrder ?? undefined,
  };
}
