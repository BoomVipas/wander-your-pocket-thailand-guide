"use server";

import { revalidatePath } from "next/cache";
import { asc, eq } from "drizzle-orm";

import { getDb, places, type InsertPlace } from "@/lib/db";
import { placeFormSchema, type PlaceFormValues } from "./validation";

function normalizePlaceInput(input: PlaceFormValues): InsertPlace {
  const nullableString = (value?: string | null) => {
    if (!value || value.trim() === "") {
      return null;
    }
    return value.trim();
  };

  return {
    googlePlaceId: nullableString(input.googlePlaceId),
    slug: nullableString(input.slug),
    name: nullableString(input.name),
    isActive: input.isActive ?? true,
    isFeatured: input.isFeatured ?? false,
    categoryKey: nullableString(input.categoryKey),
    superCategory: nullableString(input.superCategory),
    theme: nullableString(input.theme),
    tagline: nullableString(input.tagline),
    shortDescription: nullableString(input.shortDescription),
    longDescription: nullableString(input.longDescription),
    address: nullableString(input.address),
    latitude: input.latitude ?? null,
    longitude: input.longitude ?? null,
    photoReference: nullableString(input.photoReference),
    photoAttribution: nullableString(input.photoAttribution),
    bookingUrl: nullableString(input.bookingUrl),
    ttsAudioPath: nullableString(input.ttsAudioPath),
    sortOrder: input.sortOrder ?? null,
  };
}

export async function fetchPlaces() {
  const db = getDb();
  const data = await db
    .select()
    .from(places)
    .orderBy(asc(places.sortOrder), asc(places.name));

  return data;
}

export async function createPlace(rawInput: PlaceFormValues) {
  const db = getDb();
  const input = normalizePlaceInput(placeFormSchema.parse(rawInput));

  await db.insert(places).values(input);
  revalidatePath("/admin/places");
}

export async function updatePlace(id: number, rawInput: PlaceFormValues) {
  const db = getDb();
  const input = normalizePlaceInput(placeFormSchema.parse(rawInput));

  await db
    .update(places)
    .set({
      ...input,
      updatedAt: new Date(),
    })
    .where(eq(places.id, id));

  revalidatePath("/admin/places");
}

export async function deletePlace(id: number) {
  const db = getDb();

  await db.delete(places).where(eq(places.id, id));
  revalidatePath("/admin/places");
}
