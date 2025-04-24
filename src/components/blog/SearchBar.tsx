import React, { useState } from "react";
import { Search } from "lucide-react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

interface SearchResult {
  id: string;
  title: string;
  category: string;
}

const mockSearchResults: SearchResult[] = [
  { id: "1", title: "Floor Tiles Design Guide", category: "Floor Tiles" },
  { id: "2", title: "Wall Tiles Trends 2025", category: "Wall Tiles" },
  { id: "3", title: "Modern Bathroom Tiles", category: "Bathroom Tiles" },
  { id: "4", title: "Kitchen Tile Patterns", category: "Kitchen Tiles" },
  { id: "5", title: "Outdoor Tiles Selection", category: "Outdoor Tiles" },
];

export const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>(mockSearchResults);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    // Filter results based on search query
    const filtered = mockSearchResults.filter(
      (result) =>
        result.title.toLowerCase().includes(value.toLowerCase()) ||
        result.category.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  const handleSelect = (item: SearchResult) => {
    toast(`Selected: ${item.title}`);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[625px]">
        <Command>
          <CommandInput 
            placeholder="Search blogs..." 
            value={searchQuery}
            onValueChange={handleSearch}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Search Results">
              {results.map((result) => (
                <CommandItem 
                  key={result.id}
                  onSelect={() => handleSelect(result)}
                  className="cursor-pointer hover:bg-slate-100"
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{result.title}</span>
                    <span className="text-sm text-gray-500">{result.category}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};
