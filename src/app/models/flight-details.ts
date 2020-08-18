export interface FlightDetails
{
    flight_number: number;
    launch_year: string;
    links: LinkObject;
    mission_id: Array<string>;
    mission_name: string;
    launch_success: boolean;
    rocket: RocketDetails;
}
export interface LinkObject
{
    mission_patch_small: string;
}
export interface RocketDetails
{
    first_stage: CoresDetails;
}
export interface CoresDetails
{
    cores: Array<CoreObject>;
}
export interface CoreObject{
    land_success: boolean;
}