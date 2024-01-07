import { Injectable } from '@angular/core';
import { IExercise } from 'src/Interface/Exercise';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  selectedMuscleType = '';

  filterExercises(
    allExercises: IExercise[],
    selectedMuscleType: string | null,
    searchText: string
  ): IExercise[] {
    return allExercises.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (!selectedMuscleType ||
          exercise.muscleType
            .toLowerCase()
            .includes(selectedMuscleType.toLowerCase()))
    );
  }

  filterByMuscleType(muscleType: string) {
    this.selectedMuscleType =
      this.selectedMuscleType === muscleType ? '' : muscleType;
  }
}
