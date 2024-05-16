export interface australia_Hospital {
    objectid: number;
    hsib_id: number;
    hosp_name: string | null;
    category: string | null;
    street: string | null;
    pcode: string | null;
    suburb: string | null;
    state: string | null;
    xcoord: string | null;
    ycoord: string | null;
    globalid: string | null;
}


export interface Term {
    id: number;
    short_form: string;
    type: string;
    full_form: string;
    cht: string;
    chs: string;
    annotation: string | null;
    resources: string | null;
}
