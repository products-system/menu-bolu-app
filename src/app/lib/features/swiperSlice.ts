import { createSlice } from '@reduxjs/toolkit';

export const swiperSlice = createSlice({
  name: 'sticky',
  initialState: {
    value: '',
  },
  reducers: {},
});

export const {} = swiperSlice.actions;
export const isHeaderSticky = (state: any) => state.sticky.value;

export default swiperSlice.reducer;
