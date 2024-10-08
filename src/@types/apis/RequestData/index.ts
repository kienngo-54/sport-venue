export interface RDCommon {
  body?: {
    [key: string]: any;
  };
  query?:
    | {
        [key: string]: any;
      }
    | FormData;
  param?: {
    [key: string]: any;
  };
}

export interface RDGetUserInfo extends RDCommon {}

export interface RDLogin extends RDCommon {
  body: {
    email: string;
    password: string;
  };
}

export interface RDRegister extends RDCommon {
  body: {
    username: string;
    email: string;
    password: string;
  };
}

export type TCreateTeam = {
  name: string;
  sport: string;
  description?: string;
  members: string[];
};

export interface RDCreateMyTeam extends RDCommon {
  body: TCreateTeam;
}

export interface RDFindField extends RDCommon {
  query?: {
    capacity?: number;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    sport: string;
    page?: number;
    record?: number;
  };
}

export interface RDBookingField extends RDCommon {
  body: {
    fieldId: string;
    date: string;
    startTime: string;
    endTime: string;
    equipmentId?: string;
    refereeId?: string;
    trainerId?: string;
  };
}

export interface RDCreateMatchingField extends RDCommon {
  body: {
    fieldId: string;
    startTime: string;
    endTime: string;
    date: string;
    message?: string;
    max_number: number;
    sport: string;
    totalPrice: number;
  };
}

export interface RDGetListMatching extends RDCommon {
  query?: {
    p?: number;
    r?: number;
  };
}

export interface RDJoinMatching extends RDCommon {
  body: {
    matchingId: string;
    quantity: number;
  };
}
