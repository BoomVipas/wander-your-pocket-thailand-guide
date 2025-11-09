"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  MapPinIcon,
  PencilIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";

import type { Place } from "@/lib/db";
import {
  defaultPlaceValues,
  placeFormSchema,
  placeToFormValues,
  type PlaceFormValues,
} from "./validation";
import { createPlace, deletePlace, updatePlace } from "./actions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

type PlacesClientProps = {
  initialPlaces: Place[];
  initialError: string | null;
};

type SortKey = "name" | "category" | "status" | "updatedAt";

type DialogState =
  | {
      mode: "create";
    }
  | {
      mode: "edit";
      place: Place;
    };

export default function PlacesClient({
  initialPlaces,
  initialError,
}: PlacesClientProps) {
  const router = useRouter();
  const [dialogState, setDialogState] = useState<DialogState | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [sort, setSort] = useState<{ key: SortKey; direction: "asc" | "desc" }>(
    { key: "name", direction: "asc" },
  );

  const places = useMemo(() => {
    const compareStrings = (first?: string | null, second?: string | null) =>
      (first ?? "").localeCompare(second ?? "", undefined, {
        sensitivity: "base",
      });

    const compareDates = (first?: string | Date | null, second?: string | Date | null) => {
      const firstTime = first ? new Date(first).getTime() : 0;
      const secondTime = second ? new Date(second).getTime() : 0;
      return firstTime - secondTime;
    };

    const sorted = [...initialPlaces].sort((a, b) => {
      switch (sort.key) {
        case "name":
          return compareStrings(a.name, b.name);
        case "category":
          return compareStrings(a.categoryKey, b.categoryKey);
        case "status":
          return Number(a.isActive) - Number(b.isActive);
        case "updatedAt":
          return compareDates(a.updatedAt, b.updatedAt);
        default:
          return 0;
      }
    });

    return sort.direction === "asc" ? sorted : sorted.reverse();
  }, [initialPlaces, sort]);

  const toggleSort = (key: SortKey) => {
    setSort((current) =>
      current.key === key
        ? { key, direction: current.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" },
    );
  };

  const renderSortIcon = (key: SortKey) => {
    if (sort.key !== key) {
      return <ArrowUpDown className="size-3.5 opacity-40" />;
    }

    return sort.direction === "asc" ? (
      <ChevronUp className="size-3.5" />
    ) : (
      <ChevronDown className="size-3.5" />
    );
  };

  const openCreateDialog = () => {
    setDialogState({ mode: "create" });
    setFormError(null);
  };

  const openEditDialog = (place: Place) => {
    setDialogState({ mode: "edit", place });
    setFormError(null);
  };

  const closeDialog = () => {
    setDialogState(null);
    setFormError(null);
  };

  const handleSubmit = async (values: PlaceFormValues) => {
    if (!dialogState) {
      return;
    }

    setIsSaving(true);
    setFormError(null);

    try {
      if (dialogState.mode === "create") {
        await createPlace(values);
        toast.success("Place created");
      } else {
        await updatePlace(dialogState.place.id, values);
        toast.success("Place updated");
      }

      closeDialog();
      router.refresh();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to save place";
      setFormError(message);
      toast.error(message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (place: Place) => {
    const confirmed = window.confirm(
      `Remove ${place.name ?? place.slug ?? `place #${place.id}`}?`,
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(place.id);

    try {
      await deletePlace(place.id);
      toast.success("Place deleted");
      router.refresh();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to delete place";
      toast.error(message);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <>
      {initialError && (
        <Alert
          variant="destructive"
          className="bg-red-950/60 border-red-500/60 text-red-100"
        >
          <AlertTitle>Database connection failed</AlertTitle>
          <AlertDescription>
            {initialError}. Confirm `DATABASE_URL` points to your Postgres
            instance and reload this page.
          </AlertDescription>
        </Alert>
      )}

      <div className="bg-slate-900/70 border border-white/10 rounded-3xl shadow-xl shadow-black/40 backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
          <div>
            <p className="text-sm text-slate-400 uppercase tracking-wide">
              Places
            </p>
            <h2 className="text-xl font-semibold">
              {places.length} curated destinations
            </h2>
          </div>
          <Button
            onClick={openCreateDialog}
            disabled={!!initialError}
            className="bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20"
          >
            <PlusIcon className="size-4" />
            Add Place
          </Button>
        </div>

        <div className="px-6 py-4">
          {places.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <MapPinIcon className="size-10 mx-auto text-slate-600" />
              <p className="text-lg font-semibold text-white">
                No places yet
              </p>
              <p className="text-sm">
                Start by adding your first destination record.
              </p>
            </div>
          ) : (
            <Table className="min-w-[700px]">
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <button
                      type="button"
                      onClick={() => toggleSort("name")}
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400 hover:text-white transition-colors"
                    >
                      Name
                      {renderSortIcon("name")}
                    </button>
                  </TableHead>
                  <TableHead>
                    <button
                      type="button"
                      onClick={() => toggleSort("category")}
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400 hover:text-white transition-colors"
                    >
                      Category
                      {renderSortIcon("category")}
                    </button>
                  </TableHead>
                  <TableHead>
                    <button
                      type="button"
                      onClick={() => toggleSort("status")}
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400 hover:text-white transition-colors"
                    >
                      Status
                      {renderSortIcon("status")}
                    </button>
                  </TableHead>
                  <TableHead>
                    <button
                      type="button"
                      onClick={() => toggleSort("updatedAt")}
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400 hover:text-white transition-colors"
                    >
                      Updated
                      {renderSortIcon("updatedAt")}
                    </button>
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {places.map((place) => (
                  <TableRow
                    key={place.id}
                    className="bg-slate-900/30 border-white/5 hover:bg-slate-900/60 transition-colors"
                  >
                    <TableCell className="max-w-[260px]">
                      <p className="font-semibold text-slate-100 truncate">
                        {place.name ?? "Untitled"}
                      </p>
                      {place.tagline && (
                        <p className="text-xs text-slate-400 truncate">
                          {place.tagline}
                        </p>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                          {place.categoryKey ?? "Uncategorized"}
                        </p>
                        {(place.superCategory || place.theme) && (
                          <p className="text-xs text-slate-400">
                            {[place.superCategory, place.theme]
                              .filter(Boolean)
                              .join(" • ")}
                          </p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge
                          className={cn(
                            "border px-2 py-0.5 text-xs font-semibold",
                            place.isActive
                              ? "bg-emerald-400/15 text-emerald-100 border-emerald-400/40"
                              : "bg-rose-500/15 text-rose-100 border-rose-400/40",
                          )}
                        >
                          {place.isActive ? "Active" : "Archived"}
                        </Badge>
                        {place.isFeatured && (
                          <Badge className="border border-amber-400/40 bg-amber-400/15 text-amber-100 px-2 py-0.5 text-xs font-semibold">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-slate-200">
                      {place.updatedAt
                        ? formatDistanceToNow(new Date(place.updatedAt), {
                            addSuffix: true,
                          })
                        : "—"}
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => openEditDialog(place)}
                        disabled={!!initialError}
                        className="text-slate-200 hover:text-white hover:bg-slate-800/70"
                      >
                        <PencilIcon className="size-4" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(place)}
                        disabled={!!initialError || deletingId === place.id}
                        className="text-rose-200 hover:text-rose-100 hover:bg-rose-500/10"
                      >
                        {deletingId === place.id ? (
                          "Removing..."
                        ) : (
                          <>
                            <Trash2Icon className="size-4" />
                            Remove
                          </>
                        )}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>

      <PlaceDialog
        open={dialogState !== null}
        mode={dialogState?.mode ?? "create"}
        place={dialogState?.mode === "edit" ? dialogState.place : undefined}
        onOpenChange={(open) => {
          if (!open) {
            closeDialog();
          }
        }}
        onSubmit={handleSubmit}
        isSaving={isSaving}
        errorMessage={formError}
        disabled={!!initialError}
      />

      <Toaster position="top-right" />
    </>
  );
}

type PlaceDialogProps = {
  open: boolean;
  mode: "create" | "edit";
  place?: Place;
  onOpenChange: (open: boolean) => void;
  onSubmit: (values: PlaceFormValues) => Promise<void>;
  isSaving: boolean;
  errorMessage: string | null;
  disabled: boolean;
};

function PlaceDialog({
  open,
  mode,
  place,
  onOpenChange,
  onSubmit,
  isSaving,
  errorMessage,
  disabled,
}: PlaceDialogProps) {
  const form = useForm<PlaceFormValues>({
    resolver: zodResolver(placeFormSchema),
    defaultValues: defaultPlaceValues,
  });

  useEffect(() => {
    if (open) {
      form.reset(place ? placeToFormValues(place) : defaultPlaceValues);
    }
  }, [open, place, form]);

  const submitForm = form.handleSubmit(async (values) => {
    await onSubmit(values);
  });

  const title = mode === "create" ? "Add Place" : "Edit Place";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-slate-950/95 border-white/10 text-slate-100">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {errorMessage && (
          <Alert
            variant="destructive"
            className="bg-red-950/60 border-red-500/60 text-red-100"
          >
            <AlertTitle>Unable to save</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form onSubmit={submitForm} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Temple of Dawn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="wat-arun" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="googlePlaceId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Google Place ID</FormLabel>
                    <FormControl>
                      <Input placeholder="ChIJm..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="categoryKey"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Key</FormLabel>
                    <FormControl>
                      <Input placeholder="temples" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="superCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Super Category</FormLabel>
                    <FormControl>
                      <Input placeholder="culture" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Theme</FormLabel>
                    <FormControl>
                      <Input placeholder="heritage" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tagline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tagline</FormLabel>
                    <FormControl>
                      <Input placeholder="Bangkok&apos;s riverside marvel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bookingUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Booking URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ttsAudioPath"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>TTS Audio Path</FormLabel>
                    <FormControl>
                      <Input placeholder="/audio/wat-arun.mp3" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sortOrder"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sort Order</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="10"
                        value={field.value ?? ""}
                        onChange={(event) => {
                          const value = event.target.value;
                          field.onChange(
                            value === "" ? undefined : parseInt(value, 10),
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="latitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Latitude</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        placeholder="13.7437"
                        value={field.value ?? ""}
                        onChange={(event) => {
                          const value = event.target.value;
                          field.onChange(
                            value === "" ? undefined : parseFloat(value),
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="longitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Longitude</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        placeholder="100.4889"
                        value={field.value ?? ""}
                        onChange={(event) => {
                          const value = event.target.value;
                          field.onChange(
                            value === "" ? undefined : parseFloat(value),
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={2}
                      placeholder="34 Arun Amarin Rd, Wat Arun, Bangkok"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shortDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Textarea rows={2} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="longDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl>
                    <Textarea rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="photoReference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Photo Reference</FormLabel>
                    <FormControl>
                      <Textarea rows={2} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="photoAttribution"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Photo Attribution</FormLabel>
                    <FormControl>
                      <Textarea rows={2} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border border-white/10 p-4">
                    <div className="space-y-0.5">
                      <FormLabel>Active</FormLabel>
                      <FormDescription>
                        Toggle visibility inside the app.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={!!field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border border-white/10 p-4">
                    <div className="space-y-0.5">
                      <FormLabel>Featured</FormLabel>
                      <FormDescription>
                        Show this place in highlighted rails.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={!!field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="ghost"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSaving || disabled}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold"
              >
                {isSaving ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
