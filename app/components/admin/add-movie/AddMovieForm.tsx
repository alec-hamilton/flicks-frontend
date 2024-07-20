"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { queryOmdb } from "@/app/actions";
const AddMovieForm = () => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <form>
      <div className="flex">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" />
        </div>
        <div>
          <Label htmlFor="year">Year</Label>
          <Input type="text" id="year" />
        </div>
        <Button
          variant="secondary"
          onClick={async (e) => {
            e.preventDefault();
            const data = await queryOmdb("sisu", "2022");
            console.log(data);
          }}
        >
          Fill from OMDb
        </Button>
      </div>
      <Label htmlFor="format">Format</Label>
      <Input type="text" id="format" />
      <Label htmlFor="certification">Certification</Label>
      <Input type="text" id="certification" />
      <Label htmlFor="review">Review</Label>
      <Textarea id="review" />
      <Label htmlFor="rating">Rating</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Rating" />
        </SelectTrigger>
        <SelectContent>
          {ratings.map((rating) => {
            return (
              <SelectItem value={rating.toString()} key={rating}>
                {rating}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Label htmlFor="running-time">Running time</Label>
      <Input type="number" id="running-time" />
      <Label htmlFor="image-url">Image url</Label>
      <Input type="url" id="image-url" />
    </form>
  );
};

export default AddMovieForm;
