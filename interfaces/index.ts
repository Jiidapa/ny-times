// The Most Popular Interface
export interface IndexType {
    mostPopularResponse: MostPopularResponse
    searchResponse: SearchResponse
    search: string
}

export interface MostPopularResponse {
    status?: string
    copyright?: string
    num_results?: number
    results?: any
}

export interface Result {
    uri?: string
    url?: string
    id?: number
    asset_id?: number
    source?: string
    published_date?: string
    updated?: string
    section?: string
    subsection?: string
    nytdsection?: string
    adx_keywords?: string
    column?: null | any
    byline?: string
    type?: string
    title?: string
    abstract?: string
    des_facet?: string[]
    org_facet?: string[]
    per_facet?: string[]
    geo_facet?: string[]
    media?: Media[]
    eta_id?: number
}

export interface Media {
    type?: string
    subtype?: string
    caption?: string
    copyright?: string
    approved_for_syndication?: number
    'media-metadata'?: MediaMetadata[]
}

export interface MediaMetadata {
    url?: string
    format?: string
    height?: number
    width?: number
}

export type FilterDateRangeType = 'Today' | 'This week' | 'This month'

export interface SearchResponse {
    status?: string
    copyright?: string
    response?: ResponseData
}

export interface ResponseData {
    docs?: any[]
    meta?: ResponseMeta
}

export interface ResponseMeta {
    hits?: number
    offset?: number
    time?: number
}

export interface ResponseDocs {
    abstract?: string
    web_url?: string
    snippet?: string
    lead_paragraph?: string
    print_section?: string
    print_page?: string
    source?: string
    multimedia?: ResponseMultimedia[]
}

export interface ResponseMultimedia {
    rank?: number
    subtype?: string
    caption?: null
    credit?: null
    type?: string
    url?: string
    height?: number
    width?: number
    legacy?: {
        xlarge?: string
        xlargewidth?: number
        xlargeheight?: number
    }
    subType?: string
    crop_name?: string
}

export interface Content {
    uri?: string
    url?: string
    id?: number
    asset_id?: number
    source?: string
    published_date?: string
    updated?: string
    section?: string
    subsection?: string
    nytdsection?: string
    adx_keywords?: string
    column?: null | any
    byline?: string
    type?: string
    title?: string
    abstract?: string
    des_facet?: string[]
    org_facet?: string[]
    per_facet?: string[]
    geo_facet?: string[]
    media?: Media[]
    eta_id?: number
    web_url?: string
    snippet?: string
    section_name?: string
    pub_date?: string
    lead_paragraph?: string
    multimedia?: any[]
    _id?: string
    headline?: any
}
