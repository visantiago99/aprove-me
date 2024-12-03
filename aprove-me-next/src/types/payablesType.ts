interface Payable {
  emissionDate: string;
  id: string;
  value: number;
}

interface PayableWithAssignor extends Payable {
  assignorId: string;
}
