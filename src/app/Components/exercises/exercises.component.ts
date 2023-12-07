import { Component } from '@angular/core';
import { IExercise } from 'src/Interface/Exercise';

@Component({
  selector: 'app-exercises',
  template: `
    <div class="exercise__list">
      <div class="exercise__list-item card" *ngFor="let exercise of exercises">
        <div class="card__face card__face--front">
          <h1>{{ exercise.name }}</h1>
          <h2>{{ exercise.muscleType }}</h2>
        </div>
        <div class="card__face card__face--back">
          <p class="description">
            {{ exercise.description }}
          </p>
          <button (click)="showDetails(exercise)" class="exercise__list-button">
            Show Details
          </button>
        </div>
      </div>
    </div>
    <app-popup
      [show]="isDetailsShown"
      (close)="closeDetails()"
      class="popup__container"
    >
      <h1 class="popup__container-item">{{ selectedExercise?.name }}</h1>
      <h2 class="popup__container-item">{{ selectedExercise?.muscleType }}</h2>
      <p class="popup__container-item">
        <span>Description:</span>
        <br />
        {{ selectedExercise?.description }}
      </p>
      <p class="popup__container-item">
        <span>Tutorial:</span>
        <br />
        {{ selectedExercise?.tutorial }}
      </p>
    </app-popup>
  `,
  styleUrls: ['exercises.component.scss'],
})
export class ExercisesComponent {
  isDetailsShown = false;
  selectedExercise: IExercise | null = null;

  showDetails(exercise: IExercise) {
    this.selectedExercise = exercise;
    this.isDetailsShown = true;
  }

  closeDetails() {
    this.isDetailsShown = false;
  }

  exercises: IExercise[] = [
    {
      name: 'Barbell Squat',
      muscleType: 'Legs',
      description:
        'The barbell squat is a compound exercise that targets the muscles of the legs, primarily the quadriceps, hamstrings, and glutes. It also engages the core for stability.',
      tutorial:
        '1. Stand with your feet shoulder-width apart and the barbell resting on your upper back.\n2. Lower your body by bending your knees and hips, keeping your back straight.\n3. Descend until your thighs are parallel to the ground.\n4. Push through your heels to return to the starting position.',
    },
    {
      name: 'Bench Press',
      muscleType: 'Chest',
      description:
        'The bench press is a compound movement that primarily targets the chest muscles (pectoralis major) and also involves the shoulders and triceps. It is a classic exercise for upper body strength.',
      tutorial:
        '1. Lie on a flat bench with a barbell over your chest, grip slightly wider than shoulder-width.\n2. Lower the bar to your chest, keeping your elbows at a 90-degree angle.\n3. Push the bar back up to the starting position.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Deadlift',
      muscleType: 'Back, Legs',
      description:
        'The deadlift is a compound exercise that works multiple muscle groups, including the back, legs, and core. It is an excellent exercise for building overall strength and power.',
      tutorial:
        '1. Stand with your feet hip-width apart and a barbell in front of you.\n2. Bend at the hips and knees to lower your body and grasp the bar with an overhand grip.\n3. Keep your back straight and chest up as you lift the bar by straightening your hips and knees.\n4. Lower the bar back to the ground with controlled form.',
    },
    {
      name: 'Pull-Up',
      muscleType: 'Back, Biceps',
      description:
        'The pull-up is a bodyweight exercise that targets the muscles of the back, particularly the latissimus dorsi. It also engages the biceps and forearms.',
      tutorial:
        '1. Hang from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width.\n2. Pull your body upward until your chin clears the bar.\n3. Lower your body back down with control.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Plank',
      muscleType: 'Core',
      description:
        'The plank is a core exercise that engages the muscles of the abdominal region, lower back, and shoulders. It helps improve core strength and stability.',
      tutorial:
        '1. Start in a push-up position with your arms straight.\n2. Lower onto your forearms and hold your body in a straight line from head to heels.\n3. Engage your core and hold the position for the desired duration.\n4. Keep your body straight and avoid sagging or lifting your hips.',
    },
    {
      name: 'Dumbbell Lunges',
      muscleType: 'Legs',
      description:
        'Dumbbell lunges target the quadriceps, hamstrings, and glutes. It also improves balance and stability.',
      tutorial:
        '1. Stand with a dumbbell in each hand, arms by your sides.\n2. Take a step forward with your right leg, lowering your body until both knees are bent at a 90-degree angle.\n3. Push off with your right foot to return to the starting position.\n4. Repeat on the other leg.',
    },
    {
      name: 'Overhead Press',
      muscleType: 'Shoulders',
      description:
        'The overhead press targets the deltoids and trapezius muscles. It is an effective exercise for building shoulder strength.',
      tutorial:
        '1. Hold a barbell or dumbbells at shoulder height, palms facing forward.\n2. Press the weight overhead, extending your arms fully.\n3. Lower the weight back to shoulder height with control.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Russian Twists',
      muscleType: 'Core, Obliques',
      description:
        'Russian twists engage the core and oblique muscles. It is an effective exercise for improving rotational strength.',
      tutorial:
        '1. Sit on the floor with your knees bent and feet flat.\n2. Lean back slightly, keeping your back straight.\n3. Hold a weight or medicine ball with both hands and twist your torso to the right, then to the left.\n4. Continue alternating sides for the desired number of repetitions.',
    },
    {
      name: 'Tricep Dips',
      muscleType: 'Triceps',
      description:
        'Tricep dips target the triceps and also engage the chest and shoulders. It is a bodyweight exercise that can be performed using parallel bars or a sturdy surface.',
      tutorial:
        '1. Position your hands on parallel bars or a sturdy surface, shoulder-width apart.\n2. Lower your body by bending your elbows until they are at a 90-degree angle.\n3. Push through your palms to return to the starting position.\n4. Keep your body close to the surface and avoid excessive shoulder movement.',
    },
    {
      name: 'Leg Press',
      muscleType: 'Legs',
      description:
        'The leg press primarily targets the quadriceps, hamstrings, and glutes. It is a machine-based exercise that provides support for the lower back.',
      tutorial:
        '1. Sit on the leg press machine with your back against the pad.\n2. Place your feet on the platform, shoulder-width apart.\n3. Push the platform away by extending your knees.\n4. Lower the platform back to the starting position with controlled movement.',
    },
    {
      name: 'Calf Raises',
      muscleType: 'Calves',
      description:
        'Calf raises target the muscles of the calves. This exercise helps strengthen the gastrocnemius and soleus muscles.',
      tutorial:
        '1. Stand with the balls of your feet on an elevated surface.\n2. Lift your heels by contracting your calf muscles.\n3. Lower your heels back down below the level of the elevated surface.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Hammer Curl',
      muscleType: 'Biceps, Forearms',
      description:
        'Hammer curls target the biceps and forearms. This variation involves holding the dumbbells with a neutral grip.',
      tutorial:
        '1. Hold a dumbbell in each hand with a neutral grip (palms facing each other).\n2. Curl the weights toward your shoulders, keeping your palms facing in.\n3. Lower the weights back down with control.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Lat Pulldown',
      muscleType: 'Back',
      description:
        'The lat pulldown targets the latissimus dorsi muscles. It is an effective exercise for developing a V-shaped back.',
      tutorial:
        '1. Sit at a lat pulldown machine with a wide grip attachment.\n2. Pull the bar down to your chest, keeping your back straight.\n3. Slowly release the bar back to the starting position.\n4. Keep your chest up and avoid using excessive body momentum.',
    },
    {
      name: 'Front Plank',
      muscleType: 'Core',
      description:
        'The front plank is a static core exercise that engages the muscles of the abdominal region, lower back, and shoulders.',
      tutorial:
        '1. Start in a push-up position with your arms straight.\n2. Lower onto your forearms, forming a straight line from head to heels.\n3. Engage your core and hold the position for the desired duration.\n4. Keep your body straight and avoid sagging or lifting your hips.',
    },
    {
      name: 'Box Jumps',
      muscleType: 'Legs',
      description:
        'Box jumps are a plyometric exercise that targets the muscles of the legs, including the quadriceps, hamstrings, and glutes.',
      tutorial:
        '1. Stand in front of a sturdy box or platform.\n2. Jump onto the box, extending your hips and knees.\n3. Stand upright on the box before stepping back down.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Seated Cable Row',
      muscleType: 'Back',
      description:
        'The seated cable row targets the muscles of the upper and middle back. It is performed using a cable machine.',
      tutorial:
        '1. Sit at a cable row machine with your feet secured on the platform.\n2. Grab the handles with an overhand grip, arms fully extended.\n3. Pull the handles toward your torso, squeezing your shoulder blades.\n4. Extend your arms back to the starting position with control.',
    },
    {
      name: 'Reverse Crunch',
      muscleType: 'Core',
      description:
        'The reverse crunch targets the lower abdominal muscles. It involves lifting the hips off the ground toward the chest.',
      tutorial:
        '1. Lie on your back with your hands by your sides.\n2. Lift your legs off the ground, bending your knees at a 90-degree angle.\n3. Curl your hips toward your chest, lifting them off the ground.\n4. Lower your hips back down with control and repeat.',
    },
    {
      name: 'Incline Dumbbell Press',
      muscleType: 'Chest, Shoulders',
      description:
        'The incline dumbbell press targets the upper chest and shoulders. It is performed on an inclined bench with dumbbells.',
      tutorial:
        '1. Lie on an inclined bench with a dumbbell in each hand.\n2. Press the dumbbells upward, extending your arms fully.\n3. Lower the dumbbells back to shoulder height with control.\n4. Repeat for the desired number of repetitions.',
    },

    {
      name: 'Side Plank',
      muscleType: 'Core, Obliques',
      description:
        'The side plank targets the core and oblique muscles. It involves holding a plank position on one side of the body.',
      tutorial:
        '1. Start in a plank position on your side, with your elbow directly beneath your shoulder.\n2. Lift your hips to create a straight line from head to heels.\n3. Hold the position for the desired duration.\n4. Repeat on the other side.',
    },
    {
      name: 'Push Press',
      muscleType: 'Shoulders, Triceps',
      description:
        'The push press is a compound exercise that targets the shoulders and triceps. It involves using leg drive to assist in pressing a weight overhead.',
      tutorial:
        '1. Start with a barbell at shoulder height.\n2. Bend your knees and dip down, then explosively drive through your legs to press the barbell overhead.\n3. Lower the barbell back to shoulder height with control.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Single-Leg Romanian Deadlift',
      muscleType: 'Hamstrings, Glutes',
      description:
        'The single-leg Romanian deadlift targets the hamstrings and glutes while also improving balance and stability.',
      tutorial:
        '1. Stand on one leg with a dumbbell in one hand.\n2. Hinge at the hips and lower the dumbbell toward the ground.\n3. Keep your back straight and extend your free leg behind for balance.\n4. Return to the starting position and repeat on the other leg.',
    },
    {
      name: 'Bent Over Row',
      muscleType: 'Back',
      description:
        'The bent over row targets the muscles of the upper and middle back. It is performed by pulling a weight toward the torso.',
      tutorial:
        '1. Stand with a barbell or dumbbells in front of you.\n2. Hinge at the hips, keeping your back straight, and grasp the weight with an overhand grip.\n3. Pull the weight toward your torso, squeezing your shoulder blades.\n4. Lower the weight back down with control.',
    },
    {
      name: 'Mountain Climbers',
      muscleType: 'Core, Cardio',
      description:
        'Mountain climbers are a dynamic exercise that engages the core and provides a cardiovascular challenge.',
      tutorial:
        '1. Start in a plank position with your hands directly beneath your shoulders.\n2. Bring one knee toward your chest and then switch legs in a running motion.\n3. Maintain a fast and controlled pace.\n4. Continue for the desired duration.',
    },
    {
      name: 'Lateral Raises',
      muscleType: 'Shoulders',
      description:
        'Lateral raises target the deltoid muscles, specifically the lateral or side portion. It helps enhance shoulder width.',
      tutorial:
        '1. Hold a dumbbell in each hand by your sides.\n2. Lift the dumbbells out to the sides until they reach shoulder height.\n3. Keep a slight bend in your elbows and control the movement.\n4. Lower the dumbbells back to the starting position.',
    },
    {
      name: 'Hanging Leg Raise',
      muscleType: 'Core',
      description:
        'The hanging leg raise targets the lower abdominal muscles. It involves lifting the legs toward the chest while hanging from a bar.',
      tutorial:
        '1. Hang from a pull-up bar with an overhand grip.\n2. Lift your legs toward your chest, keeping them straight.\n3. Lower your legs back down with control.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Chest Fly',
      muscleType: 'Chest',
      description:
        'The chest fly targets the pectoral muscles. It is typically performed on a bench with dumbbells.',
      tutorial:
        '1. Lie on a flat bench with a dumbbell in each hand, arms extended above your chest.\n2. Lower the dumbbells out to the sides, maintaining a slight bend in your elbows.\n3. Bring the dumbbells back together over your chest.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Box Squat',
      muscleType: 'Legs',
      description:
        'The box squat is a variation of the squat that involves sitting back onto a box or bench. It targets the muscles of the legs and hips.',
      tutorial:
        '1. Stand in front of a box or bench with your feet shoulder-width apart.\n2. Sit back, lowering your hips onto the box.\n3. Pause briefly, then stand back up.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Renegade Rows',
      muscleType: 'Back, Core',
      description:
        'Renegade rows combine a plank position with a rowing motion, engaging the muscles of the back and core simultaneously.',
      tutorial:
        '1. Start in a plank position with a dumbbell in each hand.\n2. Row one dumbbell toward your hip while balancing on the other arm.\n3. Lower the dumbbell back down and repeat on the other side.\n4. Keep your core engaged to maintain stability.',
    },
    {
      name: 'Step-Ups',
      muscleType: 'Legs',
      description:
        'Step-ups target the muscles of the legs, particularly the quadriceps and glutes. It involves stepping onto an elevated surface.',
      tutorial:
        '1. Stand in front of a sturdy bench or step.\n2. Step onto the bench with one foot, driving through the heel.\n3. Bring the opposite knee toward your chest.\n4. Step back down and repeat on the other leg.',
    },
    {
      name: 'Skull Crushers',
      muscleType: 'Triceps',
      description:
        'Skull crushers, or lying triceps extensions, target the triceps. It involves lowering a weight toward the forehead while lying on a bench.',
      tutorial:
        '1. Lie on a bench with a barbell or dumbbells in your hands.\n2. Lower the weight toward your forehead, keeping your elbows in.\n3. Extend your arms back to the starting position.\n4. Keep your upper arms stationary throughout the movement.',
    },
    {
      name: 'Dumbbell Pullover',
      muscleType: 'Back, Chest',
      description:
        'The dumbbell pullover targets the muscles of the back and chest. It involves a pulling motion with a dumbbell while lying on a bench.',
      tutorial:
        '1. Lie on your back on a bench with a dumbbell in both hands.\n2. Lower the dumbbell back behind your head, keeping a slight bend in your elbows.\n3. Pull the dumbbell back up to the starting position.\n4. Keep your core engaged to stabilize your upper body.',
    },
    {
      name: 'Bicep Curl',
      muscleType: 'Biceps',
      description:
        'The bicep curl targets the biceps muscles. It is a classic isolation exercise for building arm strength.',
      tutorial:
        '1. Stand with a dumbbell in each hand, arms extended by your sides.\n2. Curl the dumbbells toward your shoulders, keeping your elbows close to your body.\n3. Lower the dumbbells back to the starting position.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Reverse Lunge',
      muscleType: 'Legs',
      description:
        'The reverse lunge targets the quadriceps, hamstrings, and glutes. It is a variation of the lunge exercise.',
      tutorial:
        '1. Stand with your feet together.\n2. Take a step backward with one foot, lowering your body until both knees are bent at a 90-degree angle.\n3. Push off with the back foot to return to the starting position.\n4. Repeat on the other leg.',
    },
    {
      name: 'Dips',
      muscleType: 'Triceps, Chest',
      description:
        'Dips target the triceps, chest, and shoulders. They can be performed using parallel bars or a sturdy surface.',
      tutorial:
        '1. Position your hands on parallel bars or a sturdy surface, shoulder-width apart.\n2. Lower your body by bending your elbows until they are at a 90-degree angle.\n3. Push through your palms to return to the starting position.\n4. Keep your body close to the surface and avoid excessive shoulder movement.',
    },
    {
      name: 'Romanian Deadlift',
      muscleType: 'Hamstrings, Glutes',
      description:
        'The Romanian deadlift targets the hamstrings and glutes. It involves a hip hinge movement with a barbell or dumbbells.',
      tutorial:
        '1. Stand with a barbell in front of you, feet hip-width apart.\n2. Hinge at the hips, keeping your back straight, and lower the barbell toward the ground.\n3. Keep a slight bend in your knees and return to the starting position.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Face Pulls',
      muscleType: 'Shoulders, Upper Back',
      description:
        'Face pulls target the muscles of the upper back and shoulders. They are typically performed using a cable machine.',
      tutorial:
        '1. Set up a cable machine with a rope attachment at face level.\n2. Grab the rope with both hands and step back.\n3. Pull the rope toward your face, keeping your elbows high.\n4. Control the movement as you return to the starting position.',
    },
    {
      name: 'Medicine Ball Slam',
      muscleType: 'Full Body',
      description:
        'Medicine ball slams are a dynamic full-body exercise that involves lifting and slamming a medicine ball to the ground.',
      tutorial:
        '1. Stand with your feet shoulder-width apart, holding a medicine ball overhead.\n2. Slam the ball to the ground with force, bending at the hips and knees.\n3. Catch the ball on the rebound and return to the starting position.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Side Lateral Raises',
      muscleType: 'Shoulders',
      description:
        'Side lateral raises target the lateral or side portion of the deltoid muscles, helping to enhance shoulder width.',
      tutorial:
        '1. Hold a dumbbell in each hand by your sides.\n2. Lift the dumbbells out to the sides until they reach shoulder height.\n3. Keep a slight bend in your elbows and control the movement.\n4. Lower the dumbbells back to the starting position.',
    },
    {
      name: 'Good Mornings',
      muscleType: 'Lower Back, Hamstrings',
      description:
        'Good mornings target the lower back and hamstrings. They involve a hip hinge movement with a barbell on the shoulders.',
      tutorial:
        '1. Place a barbell on your shoulders, feet hip-width apart.\n2. Hinge at the hips, keeping your back straight, and lower your torso toward the ground.\n3. Maintain a slight bend in your knees and return to the starting position.\n4. Repeat for the desired number of repetitions.',
    },
    {
      name: 'Cable Crunch',
      muscleType: 'Core',
      description:
        'The cable crunch is an effective core exercise that targets the abdominal muscles. It is performed using a cable machine.',
      tutorial:
        '1. Kneel in front of a cable machine with a rope attachment overhead.\n2. Grab the rope and bring your hands to your forehead.\n3. Contract your abdominal muscles, bringing your chest toward your knees.\n4. Control the movement as you return to the starting position.',
    },
    {
      name: 'Seated Leg Press',
      muscleType: 'Legs',
      description:
        'The seated leg press targets the muscles of the legs, including the quadriceps, hamstrings, and glutes. It is performed using a leg press machine.',
      tutorial:
        '1. Sit on a leg press machine with your back against the pad.\n2. Place your feet on the platform, shoulder-width apart.\n3. Press the platform away by extending your knees.\n4. Lower the platform back to the starting position with controlled movement.',
    },
  ];
}
