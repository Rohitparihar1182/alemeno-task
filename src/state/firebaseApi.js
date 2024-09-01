
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { db } from '../config/firebaseConfig';

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getCourses: builder.query({
      async queryFn() {
        try {
          const coursesCollection = collection(db, "courses");
          const courseSnapshot = await getDocs(coursesCollection);
          const courseList = await Promise.all(
            courseSnapshot.docs.map(async (courseDoc) => {
              const courseData = courseDoc.data();
              
              const instructorRef = doc(db, "instructors", courseData.instructorId);
              const instructorSnapshot = await getDoc(instructorRef);
              const instructorData = instructorSnapshot.data();
        
              return {
                id: courseDoc.id,
                ...courseData,
                instructor: {
                  id: instructorSnapshot.id,
                  ...instructorData,
                },
              };
            })
          );
        
          return { data: courseList };
        } catch (error) {
          return { error: error.message };
        }
        
      }
    }),
    getCourse: builder.query({
      async queryFn(id){
        try{
          const courseRef = doc(db, "courses", id);
          const courseSnapshot = await getDoc(courseRef);
          const courseData = courseSnapshot.data();
          if (courseData.instructorId) {
            const instructorRef = doc(db, "instructors", courseData.instructorId);
            const instructorSnapshot = await getDoc(instructorRef);
    
            if (instructorSnapshot.exists()) {
              const instructorData = instructorSnapshot.data();
              return { data: { ...courseData, instructor: instructorData } };
            } else {
              return { error: "Instructor not found" };
            }
          } else {
            return { data: courseData };
          }
        }catch(error){
          return { error: error?.message}
        }
      }
    }),
    getInstructor: builder.query({
      async queryFn(id){
        try{
          const instructorRef = doc(db, "instructors", id);
          const instructorSnapshot = await getDoc(instructorRef);
          const instructorData = instructorSnapshot.data();
          return { data: instructorData };
        }catch(error){
          return { error: error?.message}
        }
      }
    }),
    getInstructors: builder.query({
      async queryFn() {
        try {
          const instructorsCollection = collection(db, "instructors");
          const instructorSnapshot = await getDocs(instructorsCollection);
          const instructorList = instructorSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          return { data: instructorList };
        } catch (error) {
          return { error: error.message };
        }
      }
    }),
  }),
});

export const { useGetCoursesQuery, useGetInstructorsQuery, useGetCourseQuery, useGetInstructorQuery } = firebaseApi;
