import List "mo:core/List";

module {
  // Old types (from previous version)
  type OldParticipant = {
    firstName : Text;
    lastName : Text;
    dateOfBirth : Text;
    gender : Text;
    mobile : Text;
    email : Text;
    emergencyContact : Text;
    medicalConditions : Text;
    govtId : Text;
  };

  type OldBooking = {
    id : Text;
    userId : Text;
    trekId : Text;
    batchId : Text;
    participants : [OldParticipant];
    addOns : [Text];
    totalAmount : Nat;
    status : Text;
    createdAt : Int;
  };

  type OldState = {
    bookings : List.List<OldBooking>;
  };

  type NewState = {};

  // Migrate: discard old bookings (schema changed incompatibly — fresh start)
  public func migrate(_old : OldState) : NewState { {} };
};
