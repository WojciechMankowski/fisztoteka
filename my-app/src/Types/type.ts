export type Element = {
	id: number;
	name_user: string;
	name_set: string;
	set_flascards: number;
};
export type CardState = {
	id: number;
	notion: string;
	definition: string;
	name_image: string | null;
	categories: string;
};

export type Card ={
	id: number;
	notion: string;
	definition: string;
	name_image: string | null;
	categories: string;
  }
