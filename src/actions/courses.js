
export const favouriteCourse = (course,save) => ({
  type: 'FAVOURITE_COURSE',
  course: {
    ...course,
    save
  }
})

export const deleteFavouriteCourse = (id) => ({
  type: 'DELETE_FAVOURITE_COURSE',
  course: {
    id
  }
})