export interface ApiResponse {
    success: boolean;
    message: string;
    user: {
      id: number;
      gender: string;
      date_of_birth: string;
      job: string;
      city: string;
      zipcode: string;
      latitude: number;
      profile_picture: string;
      last_name: string;
      first_name: string;
      email: string;
      phone: string;
      street: string;
      state: string;
      country: string;
      longitude: number;
    };
  }