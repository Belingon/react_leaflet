/**
 * Created by Courtland.Parker on 6/19/2017.
 */
export const UPDATE_MARKERS = 'UPDATE_MARKERS';

export function updateMarkers(markers) {
    return {
        type: UPDATE_MARKERS,
        payload: markers
    };

}